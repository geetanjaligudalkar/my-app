
const courses = [

  {
    id: 0,
    name: 'Full Stack Developement Program',
    price: '89,999',
    category: 'Software Developmen',
  },
  {

    id: 1,
    name: 'Python Automation Testing Program',
    price: '64,999',
    category: 'Testing',
  },
  {

    id: 2,
    name: 'UI/UX Program',
    price: '89,999',
    category: 'design'
  }
]

function Courses() {
  const courseDiv = courses.map(course =>
    <div class="service" key={courses.id}>
            <h3>{course.name}</h3>
            <p>{course.price}</p>
            <p><strong>{course.category}</strong></p>
          </div>
  );
  return (
      <section class="container">
        <div class="row">
        {courseDiv}
        </div>
      </section>
  );
}

export default Courses;
