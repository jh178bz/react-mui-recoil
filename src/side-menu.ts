import { atom, useRecoilCallback } from 'recoil';

const selectedMenuItemState = atom({
    key: 'selectedMenuItemState',
    default: 'Inbox',
});

type SelectActions = {
    useSelectMenu: () => (menu: string) => void;
};

export const SelectActions: SelectActions = {
    useSelectMenu: () =>
        useRecoilCallback(
            ({ set }) =>
                (menu: string) => {
                    set(selectedMenuItemState, menu);
                },
            [],
        ),
};
