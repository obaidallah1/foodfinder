import Head from "next/head";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
  NextPage,
} from "next";
import LocationDetail from "components/location-details"; // Ensure this path is correct
import dbConnect from "middleware/db-connect"; // Ensure this path is correct
import { findLocationsById } from "mongoose/locations/services"; // Ensure this path is correct
import { LocationType } from "mongoose/locations/schema"; // Ensure this path is correct
import { ParsedUrlQuery } from "querystring";

// Define the Location component
const Location: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  // Parse the location data from props
  const location: LocationType = JSON.parse(props.data?.location);

  // Construct the page title
  const title = `The Food Finder - Details for ${location?.name}`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`The Food Finder. Details for ${location?.name}`} />
      </Head>
      <h1>{location?.name}</h1>
      <LocationDetail location={location} />
    </div>
  );
};

// Define getServerSideProps for server-side data fetching
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let locations: LocationType[] | [];
  const { locationId } = context.query;

  try {
    await dbConnect();
    locations = await findLocationsById([locationId as string]);

    if (!locations.length) {
      throw new Error(`Locations ${locationId} not found`);
    }
  } catch (err: any) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: { location: JSON.stringify(locations.pop()) } },
  };
};

// Export the component at the bottom
export default Location;