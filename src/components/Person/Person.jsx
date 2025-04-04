export const Person = ({ name, sex, age, isMarried, partnerName}) => {
  let male = 'husband';

  if (sex === 'm') {
    male = 'wife';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age > 0 ? <p className="Person__age">I am {age}</p> : ''}
      {isMarried === true ? (
        <p className="Person__partner">
          {partnerName} is my {male}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
