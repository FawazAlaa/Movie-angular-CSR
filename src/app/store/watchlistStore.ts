import { computed, effect, signal } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { MovieInterface } from "../movie-interface";

// function showToast(message: string) {
//   const event = new CustomEvent('wishlist-toast', { detail: message });
//   window.dispatchEvent(event);
// }

export const watchlistStore = signalStore(
    { providedIn: 'root' },
    withState({
        movieWatchList: [] as any,
        showWatchList: [] as any, // Adjust the type as needed
    }),

    withComputed((state) => ({
        moviesLength: computed(() => state.movieWatchList.length),
        showsLength: computed(() => state.showWatchList.length),

    })),

    withMethods((state) => ({

        // Add items to watchlists
        addToMovieWatchlist: (data: MovieInterface) => patchState(state, (prev) => {
            const index = prev.movieWatchList.findIndex((p: { id: any }) => p.id === data.id);
            if (index == -1) {
                const updatedMovieWatchList = [...prev.movieWatchList, { ...data }];
                localStorage.setItem('movieWishlist', JSON.stringify(updatedMovieWatchList)); // Save to localStorage
                return { movieWatchList: updatedMovieWatchList };
            }
            return { movieWatchList: prev.movieWatchList }; // No change if item already exists
        }),
        addToShowWatchlist: (data: MovieInterface) => patchState(state, (prev) => {
            const index = prev.showWatchList.findIndex((p: { id: any }) => p.id === data.id);
            if (index == -1) {
                const updatedShowWatchList = [...prev.showWatchList, { ...data }];
                localStorage.setItem('showWishlist', JSON.stringify(updatedShowWatchList)); // Save to localStorage
                return { showWatchList: updatedShowWatchList };
            }
            return { showWatchList: prev.showWatchList }; // No change if item already exists
        }),

        // Check if items are in watchlists
        checkMovieWatchlist: (data: MovieInterface) => {
            const index = state.movieWatchList().findIndex((p: { id: any }) => p.id === data.id);
            if (index == -1) {
                return false;
            }
            return true;
        },
        checkShowWatchlist: (data: MovieInterface) => {
            const index = state.showWatchList().findIndex((p: { id: any }) => p.id === data.id);
            if (index == -1) {
                return false;
            }
            return true;
        },

        // Remove items from watchlists
        removeFromMovieWatchlist: (item: any) => patchState(state, (prev) => {
            const index = prev.movieWatchList.findIndex((p: { id: any }) => p.id === item.id);
            if (index !== -1) {
                const updatedMovieWatchList = prev.movieWatchList.filter((p: any) => p.id !== item.id);
                localStorage.setItem('movieWishlist', JSON.stringify(updatedMovieWatchList)); // Save to localStorage
                return { movieWatchList: updatedMovieWatchList };
            }
            return { movieWatchList: prev.movieWatchList }; // No change if item not found
        }),
        removeFromShowWatchlist: (item: any) => patchState(state, (prev) => {
            const index = prev.showWatchList.findIndex((p: { id: any }) => p.id === item.id);
            if (index !== -1) {
                const updatedShowWatchList = prev.showWatchList.filter((p: any) => p.id !== item.id);
                localStorage.setItem('showWishlist', JSON.stringify(updatedShowWatchList)); // Save to localStorage
                return { showWatchList: updatedShowWatchList };
            }
            return { showWatchList: prev.showWatchList }; // No change if item not found
        }),


        // Clear watchlists
        clearMovieWatchlist: () => patchState(state, () => {
            localStorage.removeItem('movieWishlist'); // Clear from localStorage
            return { movieWatchList: [] };
        }),
        clearShowWatchlist: () => patchState(state, () => {
            localStorage.removeItem('showWishlist'); // Clear from localStorage
            return { showWatchList: [] };
        }),
    })),


    withHooks((state) => ({
        onInit: () => {
            const initialMovieWatchList = JSON.parse(localStorage.getItem('movieWishlist') || '[]');
            patchState(state, () => ({ movieWatchList: initialMovieWatchList }));
            const moviesStartLength = signal(0);
            const previousMovieLength = signal(moviesStartLength());
            const initialShowWatchList = JSON.parse(localStorage.getItem('showWishlist') || '[]');
            patchState(state, () => ({ showWatchList: initialShowWatchList }));
            const showsStartLength = signal(0);
            const previousShowLength = signal(showsStartLength());

            effect(() => {
                const currentmovie = state.movieWatchList();
                const prevmovie = previousMovieLength;
                previousMovieLength.set(currentmovie.length);
                moviesStartLength.set(currentmovie.length);

                const currentshow = state.showWatchList();
                const prevshow = previousShowLength;    
                previousShowLength.set(currentshow.length);
                showsStartLength.set(currentshow.length);

                // if (current.length > prev) {
                //   // Item added → show toast
                //   const addedItem = current[current.length - 1];
                //   showToast(`${addedItem.title || 'Item'} added to wishlist!`);
                // }

                
            });
        }

    }))
);

