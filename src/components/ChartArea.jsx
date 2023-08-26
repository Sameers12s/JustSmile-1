import { IconCircleArrowRight } from "@tabler/icons-react";
import UserNames from "../components/UserNames";
const ChartArea = () => {
  return (
    <div className="join-item flex flex-col flex-1 h-full rounded-lg bg-neutrals-800">
      <div className="w-full h-16 text-center ">
        <div className="flex flex-1 h-full items-center px-3">
          <UserNames />
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-neutrals-950 rounded-none min-h-0 ">
        <div className="flex-1 flex-col overflow-y-auto ">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              What kind of nonsense is this
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">
              Put me on the Council and not make me a Master!??
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              That's never been done in the history of the Jedi. It's insulting!
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">
              Calm down, Anakin.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">
              You have been given a great honor.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">
              To be on the Council at your age.
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              What kind of nonsense is this
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">
              Put me on the Council and not make me a Master!??
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              That's never been done in the history of the Jedi. It's insulting!
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">
              Calm down, Anakin.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">
              You have been given a great honor.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">
              To be on the Council at your age.
            </div>
          </div>
        </div>
        <div className="p-4 pt-1">
          <div className=" flex-shrink-0">
            <div className="join items-center justify-center bg-neutrals-900 w-full">
              <input
                id="text"
                placeholder="Type Something"
                className="h-16 input w-full rounded-lg text-bold pl-2 focus:outline-none"
                required
              />
              <button className="join-item pr-2 rounded-full ">
                <IconCircleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartArea;
