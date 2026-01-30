
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { generateGigDetails } from '../services/geminiService';

const CreateGig: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: 0,
    tags: [] as string[]
  });

  const handleAIHelp = async () => {
    if (!formData.title || !formData.category) {
      alert("Please provide a title and category first!");
      return;
    }

    setLoading(true);
    try {
      const result = await generateGigDetails(formData.title, formData.category);
      setFormData(prev => ({
        ...prev,
        description: result.description,
        tags: result.tags,
        price: result.suggestedPrice || prev.price
      }));
    } catch (error) {
      console.error("AI generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-purple-600 px-8 py-6 text-white">
          <h1 className="text-2xl font-bold">Create a New Gig</h1>
          <p className="opacity-80">Sell your services to millions of Pioneers</p>
        </div>

        <div className="p-8">
          {/* Progress Stepper */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors ${step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {s}
                </div>
                <span className={`mt-2 text-sm font-semibold ${step >= s ? 'text-purple-600' : 'text-gray-400'}`}>
                  {s === 1 ? 'Overview' : s === 2 ? 'Description' : 'Pricing'}
                </span>
                {s < 3 && <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${step > s ? 'bg-purple-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Gig Title</label>
                <textarea
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="I will do something amazing for you..."
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 min-h-[100px] text-xl font-medium"
                />
                <p className="text-sm text-gray-400 mt-2">Start with "I will..."</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>

              <div className="flex justify-end pt-6">
                <button
                  onClick={nextStep}
                  disabled={!formData.title || !formData.category}
                  className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 disabled:opacity-50 transition-all shadow-md"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex items-center justify-between">
                <div>
                  <h3 className="text-purple-900 font-bold flex items-center gap-2">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    AI Assistance
                  </h3>
                  <p className="text-purple-700 text-sm">Let Gemini write your professional description and tags.</p>
                </div>
                <button
                  onClick={handleAIHelp}
                  disabled={loading}
                  className="bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-lg font-bold hover:bg-purple-100 transition shadow-sm disabled:opacity-50"
                >
                  {loading ? 'Thinking...' : 'Generate with AI'}
                </button>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 min-h-[250px]"
                  placeholder="Describe your service in detail..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600 flex items-center gap-2">
                      {tag}
                      <button onClick={() => setFormData({...formData, tags: formData.tags.filter((_, idx) => idx !== i)})} className="hover:text-red-500">×</button>
                    </span>
                  ))}
                  <input
                    placeholder="Add tags..."
                    className="border-none focus:ring-0 text-sm p-1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const val = (e.target as HTMLInputElement).value;
                        if (val) {
                          setFormData({...formData, tags: [...formData.tags, val]});
                          (e.target as HTMLInputElement).value = '';
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button onClick={prevStep} className="text-gray-500 font-bold px-8 py-3">Back</button>
                <button
                  onClick={nextStep}
                  className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 shadow-md transition-all"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-fadeIn text-center py-12">
              <div className="max-w-xs mx-auto">
                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">Set your base price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-purple-600">π</span>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    className="w-full p-6 pl-12 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-4xl font-black text-center"
                  />
                </div>
                <p className="text-gray-400 mt-4 text-sm font-medium">Earn Pi for your hard work.</p>
              </div>

              <div className="flex justify-between pt-12 border-t">
                <button onClick={prevStep} className="text-gray-500 font-bold px-8 py-3">Back</button>
                <button
                  onClick={() => alert("Gig Published! (Demo)")}
                  className="bg-green-600 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-green-700 shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  Publish Gig
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateGig;
