import dynamic from "next/dynamic";

const ExpoHeader = dynamic(() => import("./header"), { ssr: false });

export default ExpoHeader;