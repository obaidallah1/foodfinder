import { Schema, InferSchemaType } from 'mongoose';

// Define the LocationType interface to describe the shape of the location data
export interface LocationType {
  address: string;
  street: string;
  zipcode: string;
  borough: string;
  cuisine: string;
  grade: string;
  name: string;
  on_wishlist: string[];
  location_id: string;
}

// Create the LocationSchema using the LocationType
export const LocationSchema: Schema<LocationType> = new Schema<LocationType>({
  address: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  borough: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  on_wishlist: {
    type: [String], // Array of strings
    required: true,
  },
  location_id: {
    type: String,
    required: true,
  },
});