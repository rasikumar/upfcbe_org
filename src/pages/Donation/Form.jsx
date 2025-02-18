import { timeline_bg } from "@/assets";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { PAY } from "@/utils/api";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const values = [
  { id: 0, value: 10 },
  { id: 1, value: 20 },
  { id: 2, value: 50 },
  { id: 3, value: 100 },
  { id: 4, value: 500 },
  { id: 5, value: 1000 },
];

const DonationForm = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increase = () => setSelectedValue((prev) => prev + 1);
  const decrease = () => setSelectedValue((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = { ...formData, donationAmount: selectedValue };
    try {
      const response = await axios.post(
        `${BASE_URL}${PAY}/pay`,
        payload
      );
      const { url, data } = response.data;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;

      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      setError(
        error.response?.data?.message || "Payment failed. Please try again."
      );
      console.error("Payment Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="donationpage"
      className="flex flex-col max-w-[100rem] m-auto my-10"
    >
      <div className="flex flex-col items-center justify-center my-10">
        <Heading undertext="Make Your Donation" className="text-3xl" />
        <h2 className="text-3xl font-semibold">Creating a Brighter Tomorrow</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-8">
        <div className="bg-upfwhite p-10 py-12 flex flex-col gap-6 w-1/2 rounded-3xl shadow-upfshadow">
          <h3 className="text-xl font-semibold">How Much?</h3>
          <div className="grid grid-cols-2 gap-10">
            <ul className="grid grid-rows-2 grid-cols-3 gap-10">
              {values.map((value) => (
                <button
                  type="button"
                  onClick={() => setSelectedValue(value.value)}
                  key={value.id}
                  className="items-center px-2 py-6 rounded-xl text-center"
                  style={{ backgroundImage: `url(${timeline_bg})` }}
                >
                  <label className="font-semibold">Rs.{value.value}</label>
                </button>
              ))}
            </ul>
            <div
              className="bg-slate-400 rounded-xl flex items-center flex-col gap-4 justify-center"
              style={{ backgroundImage: `url(${timeline_bg})` }}
            >
              <h4 className="text-lg font-semibold text-center">
                Like to Donate
              </h4>
              <p className="text-upfgray">Enter Your custom amount</p>
              <div className="flex items-center bg-white rounded-full w-44 justify-between p-1">
                <button
                  type="button"
                  onClick={decrease}
                  className="bg-gray-100 p-2 rounded-full"
                >
                  <Minus />
                </button>
                <span className="font-semibold">Rs.{selectedValue}</span>
                <button
                  type="button"
                  onClick={increase}
                  className="bg-gray-100 p-2 rounded-full"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-upfwhite p-10 py-12 flex flex-col gap-6 w-1/2 rounded-3xl shadow-upfshadow">
          <h3 className="text-xl font-semibold">Donor Information</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <Label htmlFor="name">Your Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="phone">Phone</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="border-upforangecrayola text-black"
              disabled={loading}
            >
              {loading ? "Processing..." : "Donate Now"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
