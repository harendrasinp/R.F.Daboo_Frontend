import React from 'react'
import { phoneNumbers,contactData } from '@/data/contactData';
const Contact = () => {
  return (
    <div>
      <div className="bg-orange-300 text-center py-2 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <p className="text-center mt-1">Feel free to reach out to us for any inquiries or information.</p>
      </div>
      <div className="w-full grid grid-cols-12 gap-4 p-5">

        <aside className="col-span-7 bg-violet-50 p-4 text-gray-800">
          <h1 className="text-center bg-gray-800 text-orange-300 p-2 mb-4">OUR ADDRESS</h1>
          <div className="col-span-3 ">
             {contactData.map((data,index) => (
                <div key={index} className="p-2" >
                    <h2 className="text-lg font-bold">{data.title}</h2>
                    <p className="text-gray-700">{data.data}</p>
                </div>
            ))}
          </div>

        </aside>

        <main className="col-span-5 bg-violet-50 p-2">
          <h1 className="text-center bg-gray-800 text-orange-300 p-2">FIND US ON MAP</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0308758329597!2d73.385615874292!3d21.111335184939097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be07eb14bd927d1%3A0x16d68e7937a4607c!2sSHRI%20J.B.%20%26%20S.A.%20SARVAJANIK%20HIGH%20SCHOOL%20%26%20SHRI%20K.D.%20SHAH%20HIGHER%20SECONDARY%20SECTION!5e0!3m2!1sen!2sin!4v1779900802511!5m2!1sen!2sin"
            width="100%"
            height="80%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </main>
        <div className="w-full col-span-12 bg-violet-50 p-2">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2">OFFICES NAMES</th>
                <th className="border border-gray-300 p-2">PHONE NUMBERS</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-center">
              {phoneNumbers.map((phone, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{phone.name}</td>
                  <td className="border border-gray-300 p-2">{phone.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contact
