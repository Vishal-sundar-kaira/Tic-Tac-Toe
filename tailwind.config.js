/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation:{
        spin:'spin 4s ease-out infinite',
        flip:'flip 1s ease-in-out infinite',
        beat:'beat 1s ease-out 1',
        borderanimate:'borderanimate 2s ease-in-out infinite'
      },
      keyframes:{
        flip:{
          '0% 50%':{transform:'rotateY(0deg)'},
          '100%':{transform:'rotateY(180deg)'},
        },
        beat:{
          '0%':{transform:'scale(1)'},
          '50%':{transform:'scale(1.2)'},
          '100%':{transform:'scale(1)'},

        },
        spin:{
          '0% 100%':{transform: 'translate(0px, 20px)'},
          '50%':{transform: 'translate(0px, 20px)'},
        },
        borderanimate:{
          '0%':{border: 'solid 5px white'},
          '25%':{border: 'solid 5px red'},
          '75%':{border: 'solid 5px green'},
          '100%':{border: 'solid 5px yellow'},
        }
      }
    },
  },
  plugins: [],
}
