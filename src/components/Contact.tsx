import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="pb-[150px]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <h2 className="text-5xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:hello@flaviojorge.com"
              className="flex items-center gap-3 text-xl hover:text-gray-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
              hello@flaviojorge.com
            </a>
            
            <div className="flex gap-6 mt-8">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-span-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
