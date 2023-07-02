RUN COMMMANDS ON TERMINAL TO INSTALL DEPENDENCIES
# to create new react application
npm create vite@latest ./ -- --template react
# installing packages of css
npm install -D tailwindcss
npx tailwindcss init
# other packages
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
# to run application
npm run dev