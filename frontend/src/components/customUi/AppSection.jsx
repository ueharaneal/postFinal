import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

export const AppSection = () => {
  return (
    <DeviceFrameset
      device="iPhone X"
      color="black"
      width={375}
      height={812}
      zoom="50%"
    >
      <div className="text-center">This is our app image</div>
    </DeviceFrameset>
  );
};
export default AppSection;
