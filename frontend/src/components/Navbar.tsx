import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-200 bg-gray-100">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    MyApp
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Show when="signed-out" >
                        <SignInButton>
                            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >Login Now</button>
                        </SignInButton>
                    </Show>
                   
    <Show when="signed-out" >
                        <SignUpButton>
                            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >Sign Up</button>
                        </SignUpButton>
                    </Show>
                 <Show when="signed-in">
                    
                    <UserButton/>

                 </Show>

                </div>
            </div>
        </nav>
    )
}

export default Navbar