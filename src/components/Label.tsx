type propTypes = {
  label: string;
};
export default function Label({ label }: propTypes) {
  return (
    <div className="flex items-center justify-around rounded-2xl bg-[#E5E7EB] px-[14px] py-[3px]">
      <span className="text-[14px]">{label}</span>
    </div>
  );
}
