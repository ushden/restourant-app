import { UserActions, UserActionsType, UserState } from '../../types';

const initialState: UserState = {
	user: {
		_id: '',
		name: '',
		roles: [],
	},
	token: '',
};

export const userReducer = (
	state = initialState,
	action: UserActionsType
): UserState => {
	switch (action.type) {
		case UserActions.ADMIN_LOGIN:
			return {
				...state,
				user: {
					...action.payload.user,
					roles: [...action.payload.user.roles],
				},
				token: action.payload.token,
			};

		default:
			return { ...state };
	}
};
