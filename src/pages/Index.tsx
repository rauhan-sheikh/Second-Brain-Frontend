import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";

const features = [
  {
    title: "Capture anything",
    description:
      "Save videos, tweets, articles, books, and loose ideas before they disappear into open tabs.",
  },
  {
    title: "Organize by type",
    description:
      "Your dashboard keeps every piece of content easy to scan, filter, revisit, and build on.",
  },
  {
    title: "Share your brain",
    description:
      "Create a public snapshot of your collection when you want to send someone your best resources.",
  },
];

const previewItems = [
  { type: "Article", title: "React patterns worth revisiting" },
  { type: "Video", title: "Distributed systems in one sitting" },
  { type: "Tweet", title: "A useful thread on product thinking" },
  { type: "Book", title: "Notes from Building a Second Brain" },
];

function Index() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-slate-950">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-left"
          aria-label="Second Brain home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <span className="block w-7">
              <Logo />
            </span>
          </span>
          <span className="text-xl font-semibold tracking-normal text-slate-900">
            Second Brain
          </span>
        </button>

        <nav className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/signin")}
            className="rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-dark"
          >
            Sign up
          </button>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:pb-24 lg:pt-14">
        <div>
          <div className="mb-5 inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-primary shadow-sm ring-1 ring-slate-200">
            Personal knowledge, finally in one place
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Second Brain
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Collect the links, references, and ideas you care about, then turn
            them into a searchable personal library you can actually use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-primary-dark"
            >
              Start building
            </button>
            <button
              type="button"
              onClick={() => navigate("/signin")}
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              Open your brain
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            <div>
              <p className="text-2xl font-bold text-slate-950">5+</p>
              <p className="mt-1 text-sm text-slate-500">content types</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">1 link</p>
              <p className="mt-1 text-sm text-slate-500">to share</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">0 clutter</p>
              <p className="mt-1 text-sm text-slate-500">when browsing</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-secondary blur-2xl sm:block" />
          <div className="relative overflow-hidden rounded-lg bg-slate-950 p-4 shadow-2xl ring-1 ring-slate-800">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                Dashboard
              </span>
            </div>

            <div className="grid gap-4 pt-5 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Rauhan's Second Brain
                </p>
                <p className="mt-3 text-3xl font-bold text-slate-950">24</p>
                <p className="mt-1 text-sm text-slate-500">saved resources</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm font-semibold text-primary-dark">
                  Share preview
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Send a clean read-only collection to friends, classmates, or
                  collaborators.
                </p>
              </div>

              <div className="space-y-3 sm:col-span-2">
                {previewItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-lg bg-white/95 px-4 py-3 shadow-sm"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase text-primary">
                        {item.type}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-800">
                        {item.title}
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-8 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg p-6 ring-1 ring-slate-200">
              <h2 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">
            Ready when your next good idea appears.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Sign up, start saving, and let your personal library get sharper
            every time you learn something worth keeping.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="rounded-md bg-slate-950 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          Create your account
        </button>
      </section>
    </main>
  );
}

export default Index;
