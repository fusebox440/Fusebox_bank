import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
  return (
    <section className="flex-center w-full max-w-[500px] px-6">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp