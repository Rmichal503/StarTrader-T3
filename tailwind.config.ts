import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Stalin: ['Stalinist One', 'cursive']
      },
      keyframes: {
        distortion:{
          '10%':{transform: 'translate(0.1%,-0.2%)', opacity:'1'},
          '20%':{transform: 'translate(-0.2%,0%)', opacity:'0.6'},
          '30%':{transform: 'translate(0.5%,-0.1%)', opacity:'1'},
          '40%':{transform: 'translate(0.3%,2.3%)', opacity:'0.9'},
          '50%':{transform: 'translate(-0.1%,0.1%)', opacity:'1'},
          '60%':{transform: 'translate(0.1%,-0.2%)', opacity:'0.8'},
          '70%':{transform: 'translate(-0.3%,0%)', opacity:'0.9'},
          '80%':{transform: 'translate(0.5%,-0.1%)', opacity:'1'},
          '90%':{transform: 'translate(0%,0.3%)', opacity:'0.5'},
          '100%':{transform: 'translate(0.1%,0%)', opacity:'1'},
        },
        primary: {
          '0%': { transform: 'translateY(0%)' },
          '100%':{transform: 'translateY(-100%)'}
        },
        secondary: {
          '0%': { transform: 'translateY(100%)' },
          '100%':{transform: 'translateY(0%)'}
        }
      },
      animation: {
        primary: 'primary 25s linear infinite',
        secondary: 'secondary 25s linear infinite',
        distortion: 'distortion 0.002s infinite linear',
      }
    },
  },
  plugins: [],
} satisfies Config;
