import Tagline from './Tagline';

const Heading = ({
  className,
  title,
  titleClasses,
  text,
  textClasses,
  tag,
  tagClasses,
}) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <Tagline
          className={`mb-4 md:justify-center ${tagClasses && tagClasses}`}
        >
          {tag}
        </Tagline>
      )}
      {title && (
        <h2 className={`h2 ${titleClasses && titleClasses}`}>{title}</h2>
      )}
      {text && (
        <p className={`body-2 mt-4 text-n-4 ${textClasses && textClasses}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
