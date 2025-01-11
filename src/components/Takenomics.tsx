import DonutChart from "./DonutChart";

const Takenomics = () => {
  return (
      <div className="bg-white rounded-lg p-6 mx-5 shadow-sm p-12 m-4">
        <h1 className="text-2xl font-bold">Takenomics</h1>
        <h2 className="text-xl font-semibold my-5">Initial Distribution</h2>
        
        <div className="flex items-start gap-8 mb-2">
          <DonutChart />
          <div className="pt-16 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#4285F4]" />
              <span className="text-lg text-gray-900">Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#F4B400]" />
              <span className="text-lg text-gray-900">Foundation: 20%</span>
            </div>
          </div>
        </div>

        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
  );
};

export default Takenomics;