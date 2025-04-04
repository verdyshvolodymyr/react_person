export const Person = ({ person }) => {
  let sex = 'wife';

  if (person.sex === 'f') {
    sex = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age > 0 ? <p className="Person__age">I am {person.age}</p> : ''}
      {person.isMarried === true ? (
        <p className="Person__partner">
          {person.partnerName} is my {sex}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
