import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
	container: {
		justifyContent: 'flex-start', 
		alignItems: 'flex-start', 
		flexDirection: 'row',
	},

	title: {
		marginLeft: '3rem',
		bottom: '1rem',
		fontSize: '13rem',
		color: 'rgba(0, 0, 0, 0.56)', 
		fontWeight: '400',
	}, 
}); 
