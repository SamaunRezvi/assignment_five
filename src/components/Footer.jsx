import logoIcon from '../assets/logo-icon.png'

const linkGroups = [
  {
    title: 'Product',
    links: ['Home', 'Technologies', 'Projects'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="" className="h-8 w-auto rounded-md" />
              <span className="text-lg font-bold text-gray-900">
                Dev <span className="text-brand-gradient">Stack</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <a href="https://github.com" className="hover:text-gray-900">GitHub</a>
              <a href="https://twitter.com" className="hover:text-gray-900">Twitter</a>
              <a href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold text-gray-800 tracking-wider uppercase">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
