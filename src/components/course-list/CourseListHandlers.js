import { useDispatch, useSelector } from "react-redux"
import { courseListActions } from "./redux/course-list-slice"
import axios from "axios"

const CourseListHandlers = () => {

    const dispatch = useDispatch()

    const data = [
        {
            id: 1,
            name: "Responsive Web Design with CSS Grid",
            instructor: "Emily Thompson",
            description: "Master the art of creating responsive and visually appealing layouts using CSS Grid.",
            likes: 3,
            enrollmentStatus: 'Open',
            thumbnail: 'https://1.bp.blogspot.com/-MyPOEyx-j-c/YC8rS-jGfBI/AAAAAAAAAxg/rhMIE4ukkqsLFABEOGLfFREzPp4mtzAhgCLcBGAsYHQ/s16000-rw/Grid-Layout-Responsive-Website-Design-Responsive-Website-Layout-Design-With-Grid-Concept-HTML-And-CSS-Rustcode.jpg',
            duration: '6 weeks',
            schedule: 'Fridays, 5:00 PM - 7:00 PM',
            location: 'Online',
            prerequisites: ['Basic HTML and CSS knowledge'],
            syllabus: [
              {
                week: 1,
                topic: 'Introduction to CSS Grid',
                content: 'Understanding the fundamentals of CSS Grid and its advantages.'
              },
              {
                week: 2,
                topic: 'Creating Responsive Layouts',
                content: 'Implementing responsive design principles using CSS Grid.'
              },
              // Additional weeks/topics as needed
            ],
            students: [
                {
                    id: 201,
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                },
                {
                    id: 202,
                    name: 'Diana Miller',
                    email: 'diana@example.com',
                },
                // Additional enrolled students...
            ],
          },
        {
            id: 2,
            name: "Introduction to React Native",
            instructor: "Shambhavi Parashar",
            description: "Learn the basics of React Native development and build your first mobile app",
            likes: 10,
            enrollmentStatus: 'Open',
            thumbnail: 'https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1608218061-75193.png',
            duration: '8 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to React Native',
                    content: 'Overview of React Native, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple mobile app using React Native components.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 101,
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                },
                {
                    id: 102,
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                },
                // Additional enrolled students...
            ],
            
        },
        {
            id: 3,
            name: "Web Development Basics",
            instructor: "Jane Smith",
            description: "Explore the core concepts of web development and build dynamic websites.",
            likes: 5,
            enrollmentStatus: 'Open',
            thumbnail: 'https://thumbs.dreamstime.com/b/web-development-concept-optimization-platform-internet-media-98385089.jpg',
            duration: '10 weeks',
            schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
            location: 'Online',
            prerequisites: ['Basic HTML and CSS knowledge', 'Understanding of JavaScript'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Web Development',
                    content: 'Overview of web development, understanding the role of HTML, CSS, and JavaScript.'
                },
                {
                    week: 2,
                    topic: 'Building Static Websites',
                    content: 'Creating static web pages using HTML and CSS.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 201,
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                },
                {
                    id: 202,
                    name: 'Diana Miller',
                    email: 'diana@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 4,
            name: "Python Programming Basics",
            instructor: "Alex Turner",
            description: "Learn the fundamentals of Python programming language and start coding.",
            likes: 3,
            enrollmentStatus: 'Open',
            thumbnail: 'https://1.bp.blogspot.com/-ToqIzWln38k/XjNBH_-KBPI/AAAAAAAAADQ/6z1Eq_y2EpweEeLNN0_duTJewmeatiZ1QCPcBGAYYCw/w1200-h630-p-k-no-nu/q141s3xfs.png',
            duration: '6 weeks',
            schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
            location: 'Online',
            prerequisites: ['No prior programming experience required'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Python',
                    content: 'Overview of Python, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Basic Python Syntax',
                    content: 'Understanding variables, data types, and basic syntax in Python.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 301,
                    name: 'Eva White',
                    email: 'eva@example.com',
                },
                {
                    id: 302,
                    name: 'Frank Robinson',
                    email: 'frank@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 5,
            name: "Data Science Essentials",
            instructor: "Sophie Williams",
            description: "Explore the essential concepts of data science and analysis techniques.",
            likes: 8,
            enrollmentStatus: 'Open',
            thumbnail: 'https://i1.wp.com/phdcoding.com/wp-content/uploads/2020/04/what-is-data-science.jpg?fit=1920%2C1080&ssl=1',
            duration: '12 weeks',
            schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
            location: 'Online',
            prerequisites: ['Basic understanding of mathematics and statistics', 'Familiarity with programming (preferably Python)'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Data Science',
                    content: 'Overview of data science, understanding the data science workflow.'
                },
                {
                    week: 2,
                    topic: 'Data Cleaning and Preprocessing',
                    content: 'Techniques for cleaning and preprocessing data for analysis.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 401,
                    name: 'George Davis',
                    email: 'george@example.com',
                },
                {
                    id: 402,
                    name: 'Helen Turner',
                    email: 'helen@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 6,
  name: "Advanced React Techniques",
  instructor: "Jonathan Rodriguez",
  description: "Explore advanced concepts and techniques in React development for scalable and maintainable applications.",
  likes: 5,
  enrollmentStatus: 'Open',
  thumbnail: 'https://www.tertiarycourses.com.sg/media/catalog/product/cache/1/image/512x/040ec09b1e35df139433887a97daa66f/a/d/advanced-react-training.jpg',
  duration: '10 weeks',
  schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
  location: 'Online',
  prerequisites: ['Solid understanding of React', 'Experience with state management'],
  syllabus: [
    {
      week: 1,
      topic: 'React Hooks Deep Dive',
      content: 'In-depth exploration of React Hooks and their applications.'
    },
    {
      week: 2,
      topic: 'State Management Strategies',
      content: 'Comparative study of different state management approaches in React.'
    },
    // Additional weeks/topics as needed
  ],
  students:[
  {
    id: 204,
    name: 'Sophia Rodriguez',
    email: 'sophia@example.com',
  },
  {
    id: 205,
    name: 'Nathan Turner',
    email: 'nathan@example.com',
  }
],
        },
        {
            id: 6,
            name: "Full-Stack Web Development Bootcamp",
            instructor: "Daniel Brown",
            description: "A comprehensive bootcamp covering both front-end and back-end development skills for aspiring full-stack developers.",
            likes: 12,
            enrollmentStatus: 'Open',
            thumbnail: 'https://s3.ap-southeast-1.amazonaws.com/uplyrn.com/uploads%2F0000%2F50%2F2022%2F10%2F11%2Fthe-ultimate-2022-full-stack-web-development-bootcamp-uplyrn.webp',
            duration: '16 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 9:00 PM',
            location: 'Online',
            prerequisites: ['Basic knowledge of HTML, CSS, and JavaScript'],
            syllabus: [
              {
                week: 1,
                topic: 'Introduction to Web Development',
                content: 'Overview of web development, setting up development tools.'
              },
              {
                week: 2,
                topic: 'Front-End Fundamentals',
                content: 'HTML, CSS, and JavaScript essentials for building user interfaces.'
              },
           
              {
                week: 3,
                topic: 'Project Showcase',

                content: 'Presenting and showcasing the full-stack project developed during the bootcamp.'
              }
            ],
            students:[
                {
                    id: 203,
                    name: 'Elijah Parker',
                    email: 'elijah@example.com',
                  },
            ],
          }
    ]

    const courses = useSelector(prevState => prevState.courses)

    const searchTextUpdateHandler = (e) => {
        dispatch(courseListActions.updateSearchText(e.target.value))
    }

    const fetchCoursesHandler = () => {
        dispatch(courseListActions.updateSearchText(""))
        dispatch(courseListActions.toggleIsLoading(true))
        setTimeout(async () => {

            try {
                const response = await axios.get("https://courses.saumay.workers.dev", {
                    withCredentials: false
                })

                if (response.data) {
                    dispatch(courseListActions.updateCourses(data))
                    dispatch(courseListActions.toggleIsLoading(false))
                }
            } catch (error) {
                // some error message
                dispatch(courseListActions.toggleIsLoading(false))
                dispatch(courseListActions.updateAlert({ status: true, message: error.message, type: "error" }))
            }

        }, 500)
    }

    const searchFromCoursesHandler = (e) => {
        e.preventDefault()
        const updatedCourses = courses.courses.filter(singleCourse => {
            return (singleCourse.name.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.instructor.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.description.toLowerCase().includes(courses.searchText.toLowerCase()))
        })
        dispatch(courseListActions.updateDisplayedCourses(updatedCourses))
    }

    return { fetchCoursesHandler, searchTextUpdateHandler, searchFromCoursesHandler }
}

export default CourseListHandlers