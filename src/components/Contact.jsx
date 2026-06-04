import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function validate(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = 'Name is required.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    nextErrors.message = 'Message is required.';
  }

  return nextErrors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus('');
      return;
    }

    setSending(true);
    setStatus('Sending...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/4a7dfaa03456565ad750b8706d2d8f6e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `Portfolio Contact from ${values.name}`,
        }),
      });

      if (response.ok) {
        setStatus("Thanks! Your message has been sent. I'll get back to you soon.");
        setValues(initialValues);
      } else {
        setStatus('Something went wrong. Please try again or email me directly at buobotin123@gmail.com');
      }
    } catch {
      setStatus('Something went wrong. Please try again or email me directly at buobotin123@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-offset py-[112px]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1152px] px-6 lg:px-0">
        <div
          data-reveal
          className="grid min-h-[580px] items-center rounded-[8px] border border-slate-200 bg-white px-8 py-12 shadow-card dark:border-[#273449] dark:bg-[#111827] dark:shadow-[0_20px_54px_rgba(0,0,0,0.28)] md:grid-cols-[.9fr_1.1fr] md:px-[72px] md:py-[64px]"
        >
          <div className="max-w-[350px]">
            <h2
              id="contact-heading"
              className="text-[32px] font-extrabold leading-tight text-ink dark:text-slate-50"
            >
              Let's Connect
            </h2>
            <p className="mt-[26px] text-[15px] leading-[1.72] text-muted dark:text-slate-300">
              I'm currently seeking internship opportunities where I can
              contribute, learn, and grow as a developer. Feel free to reach
              out!
            </p>
          </div>

          <form
            className="mt-10 w-full md:ml-auto md:mt-0 md:max-w-[445px]"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="space-y-[22px]">
              <label className="block text-[12px] font-semibold text-ink dark:text-slate-100">
                Name
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="mt-[12px] h-[50px] w-full rounded-[6px] border border-slate-200 bg-[#f7f8fd] px-[20px] text-[14px] font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:bg-white dark:border-[#273449] dark:bg-[#0b1220] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#8f8bff] dark:focus:bg-[#111827]"
                  placeholder="Your Name"
                />
              </label>
              {errors.name && (
                <p id="name-error" className="-mt-4 text-[11px] text-red-600">
                  {errors.name}
                </p>
              )}

              <label className="block text-[12px] font-semibold text-ink dark:text-slate-100">
                Email
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="mt-[12px] h-[50px] w-full rounded-[6px] border border-slate-200 bg-[#f7f8fd] px-[20px] text-[14px] font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:bg-white dark:border-[#273449] dark:bg-[#0b1220] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#8f8bff] dark:focus:bg-[#111827]"
                  placeholder="your.email@example.com"
                />
              </label>
              {errors.email && (
                <p id="email-error" className="-mt-4 text-[11px] text-red-600">
                  {errors.email}
                </p>
              )}

              <label className="block text-[12px] font-semibold text-ink dark:text-slate-100">
                Message
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className="mt-[12px] h-[140px] w-full resize-none rounded-[6px] border border-slate-200 bg-[#f7f8fd] px-[20px] py-[16px] text-[14px] font-normal text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:bg-white dark:border-[#273449] dark:bg-[#0b1220] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-[#8f8bff] dark:focus:bg-[#111827]"
                  placeholder="How can I help you?"
                />
              </label>
              {errors.message && (
                <p
                  id="message-error"
                  className="-mt-4 text-[11px] text-red-600"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-[32px] flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="h-[50px] rounded-[6px] bg-[#009b72] px-[30px] text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#008665] hover:shadow-lg hover:shadow-emerald-700/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009b72] focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:bg-[#08a879] dark:hover:bg-[#11bd8a] dark:hover:shadow-emerald-400/15 dark:focus-visible:ring-offset-[#111827]"
              >
                Send Message
              </button>
              {status && (
                <p
                  className="text-[12px] font-medium text-[#008665] dark:text-emerald-300"
                  role="status"
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
