import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  const map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

export default loader

// https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package
// https://developers.google.com/profile/u/me