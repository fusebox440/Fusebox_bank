import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className="flex-center w-full max-w-[500px] px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn