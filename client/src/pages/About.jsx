export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            Welcome to Coder's Blog
          </h1>
          <p>
            Hey, I'm Priya, the creator behind this space for personal
            development. Excited to have you here!
          </p>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              <span className="font-bold">About Me : </span>
              I'm a Student with a passion for growth and continuous learning. Coder's blog
              is where I share insights, tips, and real stories on becoming the
              best version of yourself.
            </p>

            <p>
              <span className="font-bold">What You'll Find : </span>
              Explore articles on overcoming challenges, building relationships,
              and achieving goals. Practical advice for your personal journey.
            </p>

            <p>
              <span className="font-bold">Let's Connect : </span>
              I'm not just writing; I want to hear from you! Comment or connect
              on [Your Social Media Handles]. Let's build a supportive community
              together.
            </p>

            <p>
              <span className="font-bold">Thanks for Joining:</span>
              Your presence is appreciated. Here's to our journey of growth and
              self-discovery!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
