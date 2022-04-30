import React from 'react';
import { editorStories } from '../../components/helper/DummyData';
import { Images } from '../../components/images';
import Items from '../../components/listItems/Items';
import ListsItems from '../../components/listItems/ListsItems';
import ShowItem from '../../components/showItem/ShowItem';

const EditorPicks = () => {
  return (
    <div>
      <ShowItem
        title="Editor's Picks"
        subtitle="MyLibrary HQ's handpicked favorites"
        pic={Images.fan1}
      >
        <div>
          <h2>No More Selfies - A Kardashian Dystopia</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            velit expedita fugiat, quia aperiam illo suscipit officiis quisquam
            reprehenderit corporis dolorum fugit eligendi consectetur quasi rem?
            Adipisci, tempora? Officia, illo?
          </p>
          <div>
            <span>fantasy</span>
            <span>politics</span>
            <span>future</span>
          </div>
        </div>
      </ShowItem>
      <ListsItems>
        {editorStories.map((item) => (
          <Items item={item} />
        ))}
      </ListsItems>
    </div>
  );
};

export default EditorPicks;
