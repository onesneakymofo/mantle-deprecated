import React from 'react';
import Sidebar from './Sidebar';
import Button from './Button';
function App() {
  return (
    <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16"> 
      <div className="w-full lg:w-1/5 lg:px-6">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-black leading-normal bg-white border shadow-sm border-rounded rounded-lg">
        <h1>Buttons</h1>
        <hr class="border-b border-grey-light" />
        <h3 className="my-2 ">Variations</h3>
        <Button className="btn btn-primary mr-2">Button</Button>
        <Button className="btn btn-secondary mr-2">Button</Button>
        <Button className="btn btn-white mr-2">Button</Button>
        <Button className="btn btn-gray mr-2">Button</Button>
        <Button className="btn btn-red mr-2">Button</Button>
        <Button className="btn btn-link mr-2">Button</Button>
      </div>
    </div>
  );
}

export default App;
