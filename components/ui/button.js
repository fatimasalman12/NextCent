import Link from "next/link";
// import styles from "./Button.module.css";

export default function Button(props) {
    if (props.lnk) {
    return (
      <Link className="w-72 h-[43px] py-3 px-4 rounded-lg ml-7 bg-[rgb(189,156,179)] text-white hover:bg-[rgb(177,143,167)] text-center" href={props.lnk}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className="w-72 h-[43px] py-3 px-4 rounded-lg ml-7 bg-[rgb(189,156,179)] text-white hover:bg-[rgb(177,143,167)] text-center" onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}
// bg-[rgb(189,156,179)]