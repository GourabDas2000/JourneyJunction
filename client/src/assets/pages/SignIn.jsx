import React, { useState } from 'react'

function SignIn() {
    const [signup , setsignup] = useState(true)
  return (
    <div class="h-lvh w-full flex justify-center items-center">
          <div class="h-lvh w-full flex flex-col tab:w-3/5   lap:w-[30%]" >
            <div class="flex justify-around items-center border-custom">
              <h1 class="py-4 cursor-pointer text-nowrap">SignIn</h1>
              <h2 class="py-4 cursor-pointer text-nowrap">SignUp</h2>
            </div>
            {
                (signup)?(
                    <div>
                        <div>
                            <input type="email" placeholder='Enter your Email'  />
                            <input type="text" placeholder='Enter your Username'  />
                            <input type="password" placeholder='Enter your Password' />
                            <input type="checkbox" name="Remember Me" />
                        </div>
                        <div>
                            <button>SignIn</button>
                        </div>
                        <p>or</p>
                        <div>
                          <div>SignIn with Google</div>
                          <div><img src="" alt="" /></div>
                        </div>
                    </div>
                ):(
                    <div>
                        <div>
                          <input type="email" placeholder='Enter your Email' />
                          <input type="text" placeholder='Enter your Name' />
                          <input type="password" placeholder='Enter your Password' />
                          <input type="password" placeholder='confirm your Password' />
                          <input type="checkbox" name="Remember Me" />
                        </div>
                        <div>
                          <button>SignUp</button>
                        </div>
                        <p>or</p>
                        <div>
                              <div>SignUp with Google</div>
                              <div><img src="" alt="" /></div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default SignIn