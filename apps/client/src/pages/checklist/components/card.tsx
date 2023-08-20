import React from "react";

interface IProps {
  title: string;
  items: string[];
}

export const Card = ({ title, items }: IProps) => {
  return (
    <div className="text-white">
      <form>
        <fieldset>
          <legend className="text-lg text-green-600">{title}</legend>

          {items.map((item) => {
            return (
              <div>
                <input type="checkbox" id={item} name={item} />
                <label htmlFor={item}>item</label>
              </div>
            );
          })}

          <button className="text-red-600" type="reset">RESET</button>
        </fieldset>
      </form>
    </div>
  );
};
