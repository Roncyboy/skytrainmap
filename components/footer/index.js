import dynamic from "next/dynamic";

const ExpoFooter = dynamic(() => import("./footer"), { ssr: false });

export default ExpoFooter;