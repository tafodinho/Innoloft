"use client";

import GoogleMapReact from "google-map-react";

import { cordsTypes } from "./PatentCard";

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

type Props = {
  isMarkerShown?: boolean;
  cords: cordsTypes;
};
export function MyMap({ cords }: Props) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={cords.lat} lng={cords.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
