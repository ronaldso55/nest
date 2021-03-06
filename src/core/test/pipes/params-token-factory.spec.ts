import { expect } from 'chai';
import { ParamsTokenFactory } from './../../pipes/params-token-factory';
import { RouteParamtypes } from '../../../common/enums/route-paramtypes.enum';

describe('ParamsTokenFactory', () => {
    let factory: ParamsTokenFactory;
    beforeEach(() => {
        factory = new ParamsTokenFactory();
    });
    describe('exchangeEnumForString', () => {
        describe('when key is', () => {
            describe(`RouteParamtypes.BODY`, () => {
                it('should returns body object', () => {
                    expect(factory.exchangeEnumForString(RouteParamtypes.BODY)).to.be.eql('body');
                });
            });
            describe(`RouteParamtypes.QUERY`, () => {
                it('should returns query object', () => {
                    expect(factory.exchangeEnumForString(RouteParamtypes.QUERY)).to.be.eql('query');
                });
            });
            describe(`RouteParamtypes.PARAM`, () => {
                it('should returns params object', () => {
                    expect(factory.exchangeEnumForString(RouteParamtypes.PARAM)).to.be.eql('param');
                });
            });
            describe('not available', () => {
                it('should returns null', () => {
                    expect(factory.exchangeEnumForString(-1)).to.be.eql(null);
                });
            });
        });
    });
});