interface props { msg: String, children: React.ReactNode }

export default function Tip({ msg, children }: props) {
  return (
    <span className="relative group underline decoration-dotted">
      {children}
      <div className="text-sm font-normal border py-2 px-3 border-choco-milk absolute opacity-0 z-10 group-hover:opacity-100 transition-opacity duration-150 top-8 -right-28 w-max rounded-md bg-cream-base shadow">
        {msg}
      </div>
    </span>
  );
}
