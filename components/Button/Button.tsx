import styles from "Button.module.scss";
export default function Button({
  text,
  header,
}: {
  text: string;
  header: string;
}) {
  return (
    <>
      <button>
        <p>{header}</p>
        <p>{text}</p>
      </button>
    </>
  );
}
