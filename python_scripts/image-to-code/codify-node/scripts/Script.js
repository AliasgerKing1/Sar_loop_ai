const { spawn } = require('child_process');

// Define the path to your Python script and the path to your input image
const pythonScriptPath = "../../codify-python/Script.py";
const inputImagePath = 'images/image.png';

// Spawn a new process for your Python script and pass the input image path as a command-line argument
const pythonProcess = spawn('python', [pythonScriptPath, inputImagePath]);

// Listen for the Python script to output data
pythonProcess.stdout.on('data', (data) => {
  const rectangles = JSON.parse(data.toString());
  console.log(rectangles);
});
x