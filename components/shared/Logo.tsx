const Logo = ({ text = "" }: { text: string }) => {
  return (
    <h1 className="h2-bold inline-block">
      {text} Dev<span className="text-primary-500 leading-none">Flow</span>
    </h1>
  );
};

export default Logo;
