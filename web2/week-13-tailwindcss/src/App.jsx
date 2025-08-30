import './App.css';
function App() {
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-4 rounded-2xl'>Child 1</div>
        <div className='bg-red-300 col-span-6 rounded-2xl'>Child 2</div>
        <div className='bg-green-300 col-span-2 rounded-2xl'>Child 3</div>
      </div>

      <br />

      <div className='md:bg-green-300 sm:bg-blue-300 bg-red-300 text-8xl rounded-2xl'>
        Hi there....
      </div>

      <br />
      <Test></Test>
    </>
  )
}

function Test() {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='sm:col-span-5 bg-green-300 rounded-2xl'>Hi there, I am from first div</div>
        <div className='sm:col-span-5 bg-red-300 rounded-2xl'>Hi there, I am from second div</div>
        <div className='sm:col-span-2 bg-gray-300 rounded-2xl'>Hi there, I am from third div</div>
      </div>
    </>
  )
}

export default App;
