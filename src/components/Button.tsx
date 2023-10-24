type Props = {
  title: string | Element;
  onClick?: () => void;

  [x: string]: any;
};

export function Button({ title, onClick, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`rounded flex items-center bg-blue-900 text-white px-[10px] py-[5px] font-[14px] ${rest.className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
