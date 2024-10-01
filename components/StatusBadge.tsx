import clsx from "clsx";
import Image from "next/image";

export const StatusBadge = ({
  status,
  text,
}: {
  status: Status;
  text: string;
}) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "true",
        "bg-red-600": status === "false",
      })}
    >
      <Image
        src={
          status === "true"
            ? "/assets/icons/check.svg"
            : "/assets/icons/cancelled.svg"
        }
        alt="gym"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-14-medium capitalize", {
          "text-green-500": status === "true",
          "text-red-500": status === "false",
        })}
      >
        {text}
      </p>
    </div>
  );
};
