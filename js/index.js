// vue instance...
const app = new Vue({
  el: "#app",
  data: {
    testimonials: [
      {
        id: 0,
        name: "Tanya Sinclair",
        position: "UX Engineer",
        testimonial: `I’ve been interested in coding for a while but never
        taken the jump, until now.  I couldn’t recommend this
        course enough. I’m now in the job of my dreams and so 
        excited about the future.`,
        img_url: "./assets/image-tanya.jpg",
      },
      {
        id: 1,
        name: "John Tarkpor",
        position: "Junior Front-end Developer",
        testimonial: `If you want to lay the best foundation possible I’d
            recommend taking this course. The depth the instructors
            go into is incredible.I now feel so confident about
            starting up as a professional developer.`,
        img_url: "./assets/image-john.jpg",
      },
    ],
    current: 1,
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[this.current];
    },
  },
  methods: {
    handleClick() {
      this.current += 1;
      this.current = this.current % this.testimonials.length;
    },
    currentClass(id) {
      return this.current === id;
    },
  },
});
