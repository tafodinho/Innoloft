import { BsHouse } from "react-icons/bs";

export function Breadcrumb() {
  return (
    <nav className="hidden md:flex w-full rounded-md">
      <ol className="list-reset flex items-center">
        <li className="mr-2">
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <BsHouse />
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            {">"}
          </span>
        </li>
        <li>
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Offers
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">
            {">"}
          </span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">
          Intelligent Finite Elements in Structural mechanics
        </li>
      </ol>
    </nav>
  );
}
