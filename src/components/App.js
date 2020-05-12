import React from 'react';
import Sidebar from './Sidebar';
import Button from './Button';
import Badge from './Badge';
function App() {
  return (
    <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
      <div className="w-full lg:w-1/5 lg:px-6">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 text-black leading-normal">
        <div className="w-full p-8 bg-white border shadow-sm border-rounded rounded-lg mb-3">
          <h1>Buttons</h1>
          <hr className="border-b border-grey-light" />
          <h3 className="my-2 ">Variations</h3>
          <Button className="mr-2" variant="blue">Button</Button>
          <Button className="mr-2" variant="gray">Button</Button>
          <Button className="mr-2" variant="white">Button</Button>
          <Button className="mr-2" variant="red">Button</Button>
          <h3 className="my-2 ">Sizes</h3>
          <Button className="mr-2 text-xs" variant="blue">Button</Button>
          <Button className="mr-2 text-sm" variant="blue">Button</Button>
          <Button className="mr-2" variant="blue">Button</Button>
          <Button className="mr-2 text-lg" variant="blue">Button</Button>
          <Button className="mr-2 text-xl" variant="blue">Button</Button>
        </div>
        <div className="w-full p-8 bg-white border shadow-sm border-rounded rounded-lg">
          <h1>Badges</h1>
          <hr className="border-b border-grey-light" />
          <h3 className="my-2 ">Variations</h3>
          <Badge variant="blue" className="mr-2">Badge</Badge>
          <Badge variant="gray" className="mr-2">Badge</Badge>
          <Badge variant="green" className="mr-2">Badge</Badge>
          <Badge variant="yellow" className="mr-2">Badge</Badge>
          <Badge variant="red" className="mr-2">Badge</Badge>
          <Badge variant="black" className="mr-2">Badge</Badge>
        </div>
      </div>
    </div>
  );
}

export default App;
