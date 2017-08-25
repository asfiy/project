import grails.test.AbstractCliTestCase

class OrderStatusTests extends AbstractCliTestCase {
    protected void setUp() {
        super.setUp()
    }

    protected void tearDown() {
        super.tearDown()
    }

    void testOrderStatus() {

        execute(["order-status"])

        assertEquals 0, waitForProcess()
        verifyHeader()
    }
}
