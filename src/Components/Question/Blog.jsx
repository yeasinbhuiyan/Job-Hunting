import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>

            <div className='my-5'>
                <h1 className='text-2xl font-semibold'>When Should You Context API?</h1>
                <p className='text-xl'>we should use the Context API in React when you have data that needs to be accessed by multiple components at different levels. It is particularly useful when you have global data that needs to be accessed by many components. However, use it judiciously and with care as using it improperly can make your code complex and affect performance.</p>
            </div>


            <div className='my-5'>
                <h1 className='text-2xl font-semibold'>What Is Custom Hook?</h1>
                <p className='text-xl'>A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across different components. It is a way to encapsulate and share stateful logic in a reusable way.</p>
            </div>

            <div className='my-5'>

                <h1 className='text-2xl font-semibold'>What Is UseRef?</h1>
                <p className='text-xl'>In React, useRef is a hook that returns a mutable ref object which can hold any value, similar to an instance property on a class. It is commonly used to reference a DOM element or to persist a value between renders without triggering a re-render.</p>

            </div>

          <div className='my-5'>
          <h1 className='text-2xl font-semibold'>What Is UseMemo?</h1>
            <p className='text-xl'>In React, useMemo is a hook that memoizes a function and caches its result to optimize performance by avoiding unnecessary re-computation on re-renders.</p>
          </div>
        </div>
    );
};

export default Blog;