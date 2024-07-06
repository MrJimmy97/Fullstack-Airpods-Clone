"use client";
import { initialFeaturesData, featuresData } from "../database/featuresData";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchFeatures() {
  const response = await fetch("/api/features");

  if (!response.ok) {
    const message = await response.json();
    const error = new Error(
      message || "Error occurred while fetching the features"
    );

    throw error;
  }
  const features = await response.json();
  return features;
}
export async function initialDataFetch(data: {
  features: initialFeaturesData[];
}) {
  const response = await fetch("/api/features/initial", {
    method: "POST",
    body: JSON.stringify(data.features),
    headers: {
      "Content-Type": "appliction/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occurred while fetching the features");

    throw error;
  }
  const features = await response.json();
  return features;
}
export async function updateDataFetch(data: featuresData) {
  console.log(typeof data._id === "string");
  const response = await fetch(`/api/features/${data._id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "appliction/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occurred while fetching the features");

    throw error;
  }
  const features = await response.json();
  return features;
}
export async function addDataFetch(data: initialFeaturesData) {
  const response = await fetch("/api/features", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "appliction/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occurred while fetching the features");

    throw error;
  }
  const features = await response.json();
  return features;
}
export async function deleteItem(id: string) {
  console.log(typeof id === "string");
  const response = await fetch(`/api/features/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = new Error("Error occurred while deleting the features");

    throw error;
  }
  const features = await response.json();
  return features;
}
export async function addErrorFetch(data: initialFeaturesData) {
  const response = await fetch("/api/features/error32432", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "appliction/json",
    },
  });

  if (!response.ok) {
    const error = new Error("Error occurred while fetching the features");

    throw error;
  }
  const features = await response.json();
  return features;
}