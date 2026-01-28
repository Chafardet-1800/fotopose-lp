import { CourseType } from "../base/interfaces";

interface Props {
  type: CourseType;
}

export default function CourseDetails({ type }: Props) {
  switch (type) {
    case "aesthetics":
      return (
        <div className="flex-1 flex-col gap-10 p-10 items-center">
          <h2>Belleza</h2>
        </div>
      );
    case "modeling":
      return (
        <div className="flex-1 flex-col gap-10 p-10 items-center">
          <h2>Modelaje</h2>
        </div>
      );
    default:
      return (
        <div className="flex-1 flex-col gap-10 p-10 items-center">
          <h2>Marketing</h2>
        </div>
      );
  }
}
