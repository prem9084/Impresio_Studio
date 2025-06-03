// InquiryModal.js
import { useState } from "react";
import { X } from "lucide-react";

const InquiryModal = ({ photographer, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry sent successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-60 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Send Inquiry to {photographer.name}
          </h3>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border rounded-lg px-3 py-2"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full border rounded-lg px-3 py-2"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Event Type</label>
            <select
              className="w-full border rounded-lg px-3 py-2"
              value={formData.eventType}
              onChange={(e) =>
                setFormData({ ...formData, eventType: e.target.value })
              }
            >
              <option value="">Select event type</option>
              <option value="maternity">Maternity</option>
              <option value="newborn">Newborn</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="couple">Couple</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Event Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.eventDate}
              onChange={(e) =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="3"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us about your requirements..."
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
